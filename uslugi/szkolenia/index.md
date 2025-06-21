# Szkolenia

- [automatyzacja](./automatyzacja)
- [podstawy](./podstawy)
- [programowanie](programowanie.md)
- [Geek Club Ełk](../geekclub)


Generated using bash:
```bash
# prompt: using bash create a list of files in the current directory and output the links to those files using markdown language
ls -1 | grep -v "index.md" | awk '{print "- [[" $1 "]](./" $1 ")"}'
```
