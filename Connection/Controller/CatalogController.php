<?php

namespace Controller;
require_once __DIR__ . '/../Model/Catalog.php';
use Model\Catalog;
class CatalogController
{
    private $catalog;
    public function __construct()
    {
        $this->catalog = new Catalog();
    }
    public function renderCatalogView()
    {
         return $this->catalog->getProduct();
    }
    public function  addBasket($id, $name, $price, $image)
    {
        $this->catalog->createRecordBasket($id, $name, $price, $image);
    }
    public function  addBookmarks($id, $name, $price, $image)
    {
        $this->catalog->createRecordBookmarks($id, $name, $price, $image);
    }
}