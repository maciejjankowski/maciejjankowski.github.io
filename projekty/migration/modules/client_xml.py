def generate_client_xml(client_record):
  return f'<prestashop xmlns:xlink="http://www.w3.org/1999/xlink"><customer><passwd><![CDATA[{client_record["password"]}]]></passwd><lastname><![CDATA[{client_record["lastname"]}]]></lastname>\<firstname><![CDATA[{client_record["firstname"]}]]></firstname><email><![CDATA[{client_record["email"]}]]></email><active><![CDATA[{client_record["active"]}]]></active></customer></prestashop>'

    # <id><![CDATA[{client_record["id"]}]]></id>\
