# Data files for astropy.coordinates

## sites.json

This file stores the online site registry for `astropy.coordinates.EarthLocation`.
If you want to add a site to this registry, you should first make sure you changes work and don't conflict with the builtin file.
The best way to do this is:
```
from astropy.coordinates.tests import test_sites
test_sites.check_builtin_matches_remote('file://path/to/your/new/sites.json')
```
if this function executes without complaint, all is fine.  
It will raise an error if your new file is not consistent with the builtin file (or doesn't parse).

