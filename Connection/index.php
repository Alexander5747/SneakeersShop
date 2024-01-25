<?php require_once 'template\head.php'?>
<body>
<?php require_once 'basket.php'?>
    <div class="wrapper">
<?php require_once 'template\header.php'?>
        <div class="wrapper__main">
            <div class="topBlock">
                <div class="topBlock__wrapper">
                    <div class="companies"><img src="images/logoCompanies.svg"></div>
                    <div class="topBlock__content">
                        <h1 class="topBlock__title"><span class="Human">Stan Smith</span>, <br> Forever!</h1>
                        <button class="Buy">КУПИТЬ</button>
                    </div>
                </div>
                <div class="image">
                    <img src="images/topBlock.png">
                </div>
            </div>
            <div class="sneakersCatalog">
                <div class="sneakersCatalog__header">
                    <h2 class="sneakersCatalog__title"> Все кросовки </h2>
                    <div class="sneakersCatalog__search">
                        <input type="search" placeholder="Поиск...">
                    </div>
                </div>
                <div class="sneakersCatalog__cards"></div>
            </div>
        </div>
    </div>
<script src="Catalog.js"></script>
<script src="Basket.js"></script>
</body>