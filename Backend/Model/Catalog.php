<?php
include 'Connection.php';

class Catalog
{
    private $link;

    public function __construct()
    {
        $this->link = new Connection();
    }

    public function getProduct()
    {
        $res = mysqli_query($this->link->connect(), 'SELECT * FROM Catalog');
        return mysqli_fetch_assoc($res);
    }
    public function  setProduct()
    {

    }
}

$catalog = new Catalog();
var_dump($catalog->getProduct());