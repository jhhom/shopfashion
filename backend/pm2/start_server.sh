
#!/usr/bin/env sh

set -eu

script_dir="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
backend_dir="$(cd -- "$script_dir/.." && pwd)"
jar_path="$backend_dir/target/app.jar"

if [ ! -f "$jar_path" ]; then
	echo "Jar file not found: $jar_path" >&2
	echo "Build the backend first with ./mvnw clean package" >&2
	exit 1
fi

cd "$backend_dir"
exec java -jar "$jar_path"