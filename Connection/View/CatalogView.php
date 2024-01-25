<?php

namespace View;
require_once __DIR__ . '/../Controller/CatalogController.php';
use Controller\CatalogController;
class CatalogView
{
    private $catalogController;
    public function __construct()
    {
        $this->catalogController = new CatalogController();
    }
    public function getCatalogController()
    {
        return $this->catalogController->renderCatalogView();
    }
}
?>
    <?php
    $catalogView = new CatalogView();
    $result = $catalogView->getCatalogController();
    $resJson = json_encode($result);
    echo $resJson;
    ?>