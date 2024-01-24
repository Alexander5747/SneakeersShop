<?php

namespace Model;
require_once __DIR__ . '/../Core/Model.php';
use Core\Model;
class Catalog
{
    private $link;

    public function __construct()
    {
        $this->link = new Model();
    }

    public function getProduct()
    {
        $res = mysqli_query($this->link->connect(), 'SELECT * FROM Catalog');
        return mysqli_fetch_assoc($res);
    }
}