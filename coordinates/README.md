# Data files for astropy.coordinates

## sites.json

This file stores the online site registry for `astropy.coordinates.EarthLocation`.

Note that it is important that consistency be maintained between the data file included in astropy and the list in this registry.
That is, if a user asks for a site when *offline*, they should always get the same answer as when they do when using the online `astropy-data` list.
So you should always check that any change you make to the registry does not conflict with the list included in astropy.
The best way to do this is to use the following function:
```
from astropy.coordinates.tests import test_sites
test_sites.check_builtin_matches_remote('file://path/to/your/new/sites.json')
```
if this function executes without complaint, all is fine.  
It will raise an error if your new file is not consistent with the builtin file (or doesn't parse).

