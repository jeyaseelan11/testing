/*
 * Service settings
 */
var ProductsDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "55a8d188e4b0d3289c0d1d6d"
}

/*
 * Services
 */

var ProductsDB_Products_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Products',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ProductsDB_settings
});
var BarcodeService = new Apperyio.BarCodeService({});

var ProductsDB_Products_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Products/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': ProductsDB_settings
});

var ProductsDB_Products_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Products/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ProductsDB_settings
});