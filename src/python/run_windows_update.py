import subprocess
import sys

try:
    result = subprocess.run(
        ["powershell", "-Command", "Start-Process usoclient -ArgumentList 'StartScan' -Verb runAs"],
        capture_output=True,
        text=True,
        check=True
    )
    print("✅ Windows Update scan initiated successfully.")
    sys.exit(0)
except subprocess.CalledProcessError as e:
    print(f"❌ Update check failed:\n{e.stderr}")
    sys.exit(1)
except Exception as e:
    print(f"❌ Unexpected error:\n{e}")
    sys.exit(1)
