<?php
// Define the ERP API endpoint
$erp_api_endpoint = "https://example.com/api/v1/orders";

// Define the webhook URL
$webhook_url = "https://example.com/webhook/new_order";

$confirmation_url = "https://example.com/webhook/new_order";

// Create a function to handle new orders in the CRM
function handle_new_order($order)
{
    // if the request is authorized,
    if ($data["secret"] != "secret") {
        return new Response("Unauthorized", 401);
    }

    // Extract the relevant data from the order
    $order_id = $order["id"];
    $product_id = $order["product_id"];
    $client_id = $order["client_id"];
    $quantity = $order["quantity"];

    // Create a new order in the ERP system
    $erp_order = [
        "product_id" => $product_id,
        "client_id" => $client_id,
        "quantity" => $quantity
    ];

    $response = requests::post($erp_api_endpoint, json_encode($erp_order));

    // If the order was created successfully, send a webhook notification
    if ($response->getStatusCode() == 201) {
        requests::post($confirmation_url, json_encode(["order_id" => $order_id]));
    }
}

// Start a webhook server to listen for new orders in the CRM
function start_webhook_server()
{
    $app = new Silex\Application();

    $app->post($webhook_url, function (Request $request) {
        $data = json_decode($request->getContent(), true);
        // handle the new order
        handle_new_order($data);
        return new Response("OK", 200);
    });

    $app->run();
}

// Start the webhook server
start_webhook_server();

?>
