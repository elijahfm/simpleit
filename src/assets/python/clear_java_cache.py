import subprocess
import sys

try:
    result = subprocess.run(
        ['javaws', '-uninstall'],
        capture_output=True,
        text=True,
        check=True
    )
    print("✅ Java cache cleared successfully.")
    sys.exit(0)
except subprocess.CalledProcessError as e:
    print(f"❌ Failed to clear Java cache:\n{e.stderr}")
    sys.exit(1)
except Exception as e:
    print(f"❌ Unexpected error:\n{e}")
    sys.exit(1)
