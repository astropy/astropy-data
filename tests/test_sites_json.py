import json
import os


def test_sites():
    """Test the file is loadable, does not vet the content."""
    filename = os.path.join(os.path.dirname(__file__),  os.pardir,
                            'coordinates', 'sites.json')
    with open(filename) as fin:
        data = json.load(fin)

    # Basic check on the default site
    assert 'greenwich' in data and data['greenwich']['timezone'] == 'Greenwich'
