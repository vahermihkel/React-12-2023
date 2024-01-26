import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup } from 'react-bootstrap'
 
const FilterButtons = ({categories, setProducts, dbProducts}) => {
  const { t } = useTranslation();
 
  const filterByCategory = (categoryClicked) => {
    const filtered = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(filtered);
  }
 
  const removeFilter = () => {
    setProducts(dbProducts.slice());
  }
 
  return (
    <div>
      <ButtonGroup>
        <Button onClick={removeFilter}>{t("all")}</Button>
        {categories.map(category => 
          <Button 
            key={category.name} 
            onClick={() => filterByCategory(category.name)}>{t(category.name)}
          </Button>
        )}
      </ButtonGroup>
    </div>
  )
}
 
export default FilterButtons