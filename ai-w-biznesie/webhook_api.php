<?php

// Define the CRM API endpoint
$crm_api_endpoint = "https://example.com/api/v1/orders";

// Define the ERP API endpoint
$erp_api_endpoint = "https://example.com/api/v1/orders";

// Define the webhook URL
$webhook_url = "https://example.com/webhook/new_order";

// Create a function to handle new orders in the CRM
function handle_new_order($order)
{
    // Extract the relevant data from the order
    $order_id = $order["id"];
    $product_id = $order["product_id"];
    $quantity = $order["quantity"];

    // Create a new order in the ERP system
    $erp_order = [
        "product_id" => $product_id,
        "quantity" => $quantity
    ];

    $response = requests::post($erp_api_endpoint, json_encode($erp_order));

    // If the order was created successfully, send a webhook notification
    if ($response->getStatusCode() == 201) {
        requests::post($webhook_url, json_encode(["order_id" => $order_id]));
    }
}

// Start a webhook server to listen for new orders in the CRM
function start_webhook_server()
{
    $app = new Silex\Application();

    $app->post($webhook_url, function (Request $request) {
        $data = json_decode($request->getContent(), true);
        handle_new_order($data);
        return new Response("OK", 200);
    });

    $app->run();
}

// Start the webhook server
start_webhook_server();

?>
