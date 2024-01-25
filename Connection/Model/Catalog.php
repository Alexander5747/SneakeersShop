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
        for ($data = []; $row = mysqli_fetch_assoc($res); $data[] = $row);
        return $data;
    }
    public function createRecordBasket($id, $name, $price, $image)
    {
        $id = mysqli_real_escape_string($this->link->connect(), $id);
        $name = mysqli_real_escape_string($this->link->connect(), $name);
        $price = mysqli_real_escape_string($this->link->connect(), $price);
        $image = mysqli_real_escape_string($this->link->connect(), $image);
        $query = "INSERT INTO basket (id, name, price, image) VALUES ('$id', '$name', '$price', '$image')";
        return mysqli_query($this->link->connect(), $query);
    }
    public function createRecordBookmarks($id, $name, $price, $image)
    {
        $id = mysqli_real_escape_string($this->link->connect(), $id);
        $name = mysqli_real_escape_string($this->link->connect(), $name);
        $price = mysqli_real_escape_string($this->link->connect(), $price);
        $image = mysqli_real_escape_string($this->link->connect(), $image);
        $query = "INSERT INTO Bookmarks (id, name, price, image) VALUES ('$id', '$name', '$price', '$image')";
        return mysqli_query($this->link->connect(), $query);
    }

}