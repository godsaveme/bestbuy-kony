/* jshint esnext: true */
define(() => {
  
  let bestBuyApi;
  let bestBuyApiClass;
  let self;

  function onInit() {
    bestBuyApi = require('bestBuyApi');
    bestBuyApiClass = new bestBuyApi.bestBuyApi();
    self = this;
  }


  const getCategories = (params) => {
    //temporarily
    kony.print(`this is this: ${JSON.stringify(self.view.flxCategories)}`);
    self.view.flxCategories.isVisible = true;
      self.view.flxProducts.isVisible = false;
    //try {
      bestBuyApiClass.getCategories(self.getCategoriesSuccess, self.getCategoriesFailure, params);
    //} catch (err) {
    //  alert('There was an error processing categories');
    //}
  };
  
  const getProductsByCategory = (params) => {
    //try {
      bestBuyApiClass.getProductsByCategory(self.getProductsByCategorySuccess, self.getProductsByCategoryFailure, params);
    //}catch (err){
    //  alert('There was an error processing products by category');
    //}
  };
  
  const getProductsByCategorySuccess = (res) => {
    self.dismissLoadingScreen();
    if(res.opstatus === 0){
      self.view.flxCategories.isVisible = false;
      self.view.flxProducts.isVisible = true;
      if(res.products && res.products.length > 0){
        
        const filterProducts = res.products.map(product => {
          let filterProduct = product;
          if(product.onSale === 'true'){
            filterProduct.template='flxRowTemplate';
            filterProduct.finalPrice = '$ ' + product.salePrice;
          }else{
            filterProduct.finalPrice = '$ ' + product.regularPrice;
          }
          if(product.customerReviewAvg !== 'null'){
            filterProduct.customerReviewAvg = 'Avg User Raiting: ' + product.customerReviewAvg;
          }else{
            filterProduct.customerReviewAvg = '';
          }
          
          return filterProduct;
        });
        self.view.segProducts.removeAll();
        self.view.segProducts.setData(filterProducts);
        self.view.segProducts.widgetDataMap = {
          lblName: 'name',
          lblPrice: 'finalPrice',
          lblAvgUserRating: 'customerReviewAvg',
          imgProduct: 'largeImage' 
        };
      }else{
        alert("There are no products");
      }
    }else{
      alert('There was an error processing products');
    }
  }
  
  function getProductsByCategoryFailure(res){
    kony.print('getProductsByCategoryFailure'+JSON.stringify(res));
    self.dismissLoadingScreen();
  }

  function onRowClickSegCategories() {
    let segCategoriesItemId = self.view.segCategories.selectedRowItems[0].id;
    let categId = { "idCategory": segCategoriesItemId };
    self.getCategories(categId);
  }

  const getCategoriesSuccess = (res) => {
    self.dismissLoadingScreen();
    if (res.opstatus === 0) {
      if (res.categories && res.categories[0].subCategories) {
        let categories = res.categories[0];
        let subCategories = categories.subCategories;
        let path = categories.path;
        if (subCategories.length > 0) {
          self.view.segCategories.removeAll();
          self.view.segCategories.setData(subCategories);
          self.view.segCategories.widgetDataMap = { lblDescription: 'name' };
        }
        kony.print('pasthzz '+JSON.stringify(path.length));
        if (path.length > 0) {
          self.breadcrumbUpdate(path,'categories');
        }else{
          alert('There was a error processing breadcrumbs');
        }
      }else{
        
        let segCategoriesItemId = self.view.segCategories.selectedRowItems[0].id;
        let segCategoriesItemName = self.view.segCategories.selectedRowItems[0].name;
        let categoryPathId = { 'categoryPathId': segCategoriesItemId };
        self.getProductsByCategory(categoryPathId);
        self.breadcrumbUpdate(segCategoriesItemName,'products');
        
      }
    } else {
      alert('There was an error processing categories');
    }
  }

  function breadcrumbUpdate(path,type){
    let breadcrumbsTxt = "";
   	if(type === 'categories'){
      	path.forEach(element => {
      		breadcrumbsTxt += `${element.name} > `;
    	});
    }
    if(type === 'products'){
      breadcrumbsTxt = 'Category: '+ path;
    }
    
    self.view.lblBreadcrumb.text = breadcrumbsTxt;
  }

  const getCategoriesFailure = (res) => {
    self.dismissLoadingScreen();
  };
  
  function dismissLoadingScreen(){
  	kony.application.dismissLoadingScreen();
  }
  
  const onBackButton = () => {
    alert(`Hi`);
  };
  
  return {
    onInit: onInit,
    getCategories: getCategories,
    onRowClickSegCategories: onRowClickSegCategories,
    getCategoriesSuccess: getCategoriesSuccess,
    getCategoriesFailure: getCategoriesFailure,
    breadcrumbUpdate: breadcrumbUpdate,
    getProductsByCategory: getProductsByCategory,
    getProductsByCategorySuccess: getProductsByCategorySuccess,
    getProductsByCategoryFailure: getProductsByCategoryFailure,
    dismissLoadingScreen: dismissLoadingScreen,
    onBackButton: onBackButton
  };
});