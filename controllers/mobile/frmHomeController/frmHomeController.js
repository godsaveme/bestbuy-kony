define(() => {

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
    dismissLoadingScreen: dismissLoadingScreen
  }
  var bestBuyApi;
  var bestBuyApiClass;

  function onInit() {
    bestBuyApi = require('bestBuyApi');
    bestBuyApiClass = new bestBuyApi.bestBuyApi();
  }


  function getCategories(params) {
    //try {
      bestBuyApiClass.getCategories(this.getCategoriesSuccess, this.getCategoriesFailure, params);
    //} catch (err) {
      //kony.print('getCategoriesError '+JSON.stringify(err));
    //  alert('There was an error processing categories');
    //}
  }
  
  function getProductsByCategory(params){
    //try {
      bestBuyApiClass.getProductsByCategory(this.getProductsByCategorySuccess, this.getProductsByCategoryFailure, params);
    //}catch (err){
    //  alert('There was an error processing products by category');
    //}
  }
  
  function getProductsByCategorySuccess(res){
    this.dismissLoadingScreen();
    //kony.print('getProductsByCategorySuccessEnter'+JSON.stringify(res));
    if(res.opstatus === 0){
      //kony.print('getProductsByCategorySuccess'+JSON.stringify(res));
      if(res.products && res.products.length > 0){
        alert("There are products "+JSON.stringify(res.products));
      }else{
        alert("There are no products");
      }
    }
  }
  
  function getProductsByCategoryFailure(res){
    kony.print('getProductsByCategoryFailure'+JSON.stringify(res));
    this.dismissLoadingScreen();
  }

  function onRowClickSegCategories() {
    let segCategoriesItemId = this.view.segCategories.selectedRowItems[0].id;
    let categId = { "idCategory": segCategoriesItemId };
    //kony.print('87654321'+JSON.stringify(segCategoriesItemId));
    this.getCategories(categId);
  }

  function getCategoriesSuccess(res) {
    this.dismissLoadingScreen();
    if (res.opstatus === 0) {
      if (res.categories && res.categories[0].subCategories) {
        let categories = res.categories[0];
        let subCategories = categories.subCategories;
        let path = categories.path;
        if (subCategories.length > 0) {
          this.view.segCategories.removeAll();
          this.view.segCategories.setData(subCategories);
          this.view.segCategories.widgetDataMap = { lblDescription: 'name' };
        }
        kony.print('pasthzz '+JSON.stringify(path.length));
        if (path.length > 0) {
          this.breadcrumbUpdate(path,'categories');
        }else{
          alert('There was a error processing breadcrumbs');
        }
      }else{
        //if(res.categories){
        //  let categories = res.categories[0];
        //  let categoryPathId = {'categoryPathId': categories.idParent};
        //  this.getProductsByCategory(categoryPathId);
        //}
        this.view.flxCategories.isVisible = false;
        this.view.flxProducts.isVisible = true;
        let segCategoriesItemId = this.view.segCategories.selectedRowItems[0].id;
        let segCategoriesItemName = this.view.segCategories.selectedRowItems[0].name;
        let categoryPathId = { 'categoryPathId': segCategoriesItemId };
        this.getProductsByCategory(categoryPathId);
        this.breadcrumbUpdate(segCategoriesItemName,'products');
        
      }
    } else {
      alert('There was an error processing categories');
    }
  }

  function breadcrumbUpdate(path,type){
    let breadcrumbsTxt = "";
   	if(type === 'categories'){
      	path.forEach(element => {
      		breadcrumbsTxt += element.name + " > ";
    	});
    }
    if(type === 'products'){
      breadcrumbsTxt = 'Category: '+ path;
    }
    
    this.view.lblBreadcrumb.text = breadcrumbsTxt;
  }

  function getCategoriesFailure(res) {
    this.dismissLoadingScreen();
  }
  
  function dismissLoadingScreen(){
  	kony.application.dismissLoadingScreen();
  }
});