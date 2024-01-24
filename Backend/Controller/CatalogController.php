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
}