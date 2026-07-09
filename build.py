#!/usr/bin/env python3
"""
Gera index.html a partir de index.template.html + partials/*.html.

Uso:
    python build.py

Rode isso sempre que editar algo dentro de partials/ ou index.template.html,
antes de testar localmente ou commitar. O index.html final continua sendo
um arquivo estatico normal -- nada muda no deploy (Cloudflare Pages serve
index.html direto, sem precisar rodar build nenhum).
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TEMPLATE = ROOT / "index.template.html"
PARTIALS_DIR = ROOT / "partials"
OUTPUT = ROOT / "index.html"

INCLUDE_RE = re.compile(r"\{\{include:([\w.-]+)\}\}\n?")


def build() -> str:
    template = TEMPLATE.read_text(encoding="utf-8")

    def replace(match: re.Match) -> str:
        name = match.group(1)
        partial_path = PARTIALS_DIR / name
        if not partial_path.exists():
            print(f"ERRO: partial nao encontrado: {partial_path}", file=sys.stderr)
            sys.exit(1)
        return partial_path.read_text(encoding="utf-8")

    return INCLUDE_RE.sub(replace, template)


def main() -> None:
    result = build()
    OUTPUT.write_text(result, encoding="utf-8", newline="\n")
    print(f"index.html gerado ({len(result)} bytes) a partir de {TEMPLATE.name} + partials/")


if __name__ == "__main__":
    main()
