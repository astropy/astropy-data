# Data files for astropy.coordinates

## sites.json

This file stores the online site registry used by `astropy.coordinates.EarthLocation`.

When comptributing to this list, be sure to follow the same form the others do, and that the resulting file is valid JSON. 
Additionally, it is important that consistency be maintained between the data file included in astropy and the list in this registry.
That is, if a user asks for a site when *offline*, they should always get the same answer as when they do when using the online `astropy-data` list.
(Currently this is not very difficult, because only one file is present in the local data file. But that might change in the future.)

The best way to check both of these issues this is to run the following before contributing to the registry:
```
from astropy.coordinates.tests import test_sites
test_sites.check_builtin_matches_remote('file://path/to/your/new/sites.json')
```
If this function executes without complaint, all is fine.  
It will raise an error if your new file is not consistent with the builtin file (or doesn't parse).
Please report the results of this check when you submit your pull request to change the registry.
