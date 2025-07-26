import os
import shutil

# Get the path to the Teams cache directory
teams_cache_path = os.path.expandvars(r"%APPDATA%\Microsoft\Teams")

# Check if the path exists
if os.path.exists(teams_cache_path):
    print(f"Found Teams cache at: {teams_cache_path}")
    
    # Loop through all items in the directory and delete them
    for item in os.listdir(teams_cache_path):
        item_path = os.path.join(teams_cache_path, item)
        try:
            if os.path.isfile(item_path) or os.path.islink(item_path):
                os.unlink(item_path)
                print(f"Deleted file: {item_path}")
            elif os.path.isdir(item_path):
                shutil.rmtree(item_path)
                print(f"Deleted folder: {item_path}")
        except Exception as e:
            print(f"Failed to delete {item_path}: {e}")
else:
    print("Teams cache directory not found.")
