# Airmass Extinction files

These were copied over from https://github.com/pypeit/PypeIt.

|    File            |   Lon      |    Lat     |   Elevation (m) | Ref |
| ------------------ | ----------:| ----------:|----------------:|----:|
| ctioextinct.dat    | 70.8150    | -30.1653   |      2215.0     |  1  |
| kpnoextinct.dat    | 111.600    |  31.9633   |       2120.0    |  2  |
| lapalmaextinct.dat | 17.8947    | 28.7636    |      2396.0     |  3  |
| mkoextinct.dat     | 155.47833  |  19.82833  |      4160.0     |  4  |
| mthamextinct.dat   | 121.6428   |  37.34139  |      1290.0     |  5  |
| paranalextinct.dat | 70.4048305 | -24.627167 |       2635.4    |     |

1. ctioextinct.dat: CTIO extinction table for IRAF ONEDSPEC (in Angstroms)
The CTIO extinction curve distributed with IRAF comes from the work of
Stone & Baldwin (1983 MN 204, 347) and Baldwin & Stone (1984 MN 206,
241).  The first of these papers lists the points from 3200-8370A while
the second extended the flux calibration from 6056 to 10870A but the
derived extinction curve was not given in the paper.  The IRAF table
follows SB83 out to 6436, the redder points presumably come from BS84
with averages used in the overlap region. More recent CTIO extinction
curves are shown as Figures in Hamuy et al (92, PASP 104, 533 ; 94 PASP
106, 566). -- Steve Heathcote, Mon, 19 Jul 1999

2. kpnoextinct.dat: KPNO extinction table for IRAF ONEDSPEC (in Angstroms)

3. lapalmaextinct.dat: Extinction table for Roque de Los Muchachos Observatory, La Palma.
Described in https://www.ing.iac.es/Astronomy/observing/manuals/ps/tech_notes/tn031.pdf.

4. mkoextinct.dat: Extinction table for Mauna Kea Observatory constructed from https://www.gemini.edu/sciops/telescopes-and-sites/observing-condition-constraints/extinction. May want to update to newer data from https://www.aanda.org/articles/aa/pdf/2013/01/aa19834-12.pdf.

5. mthamextinct.dat: Extinction table for Lick Observatory on Mt. Hamilton constructed from https://mthamilton.ucolick.org/techdocs/standards/lick_mean_extinct.html.

6. paranalextinct.dat: Extinction table for ESO-Paranal taken from http://www.eso.org/sci/facilities/eelt/science/drm/tech_data/data/atm_scat/paranal.dat. See also https://www.aanda.org/articles/aa/pdf/2011/03/aa15537-10.pdf for updated version.
