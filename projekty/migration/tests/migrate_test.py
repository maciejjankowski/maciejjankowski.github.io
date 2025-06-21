import modules.map_csv as map_csv

def test_map_csv():
    presta_record = map_csv.map_client_record({"a":"b"})
    assert presta_record == {"a":"b"}

def main():
    pass

if __name__ == "__main__":
    main()