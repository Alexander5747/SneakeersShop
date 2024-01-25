<?php
require_once '../../Controller/CatalogController.php';
use Controller\CatalogController;

error_reporting(E_ALL);
ini_set('display_errors', 'on');
mb_internal_encoding('UTF-8');

$json = file_get_contents('php://input');
$data = json_decode($json, true);
$id = $data['id'];
$name = $data['name'];
$price = $data['price'];
$image = $data['image'];

$catalogController = new CatalogController();
$catalogController->addBasket($id, $name, $price, $image);

echo '<pre>';
print_r($data);
echo '</pre>';