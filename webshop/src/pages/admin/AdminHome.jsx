import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AdminHome = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Button as={Link} to="/admin/maintain-shops" variant="primary">{t("admin.maintain-shops")}</Button>{' '}
      <Button as={Link} to="/admin/maintain-categories" variant="secondary">{t("admin.maintain-categories")}</Button>{' '}
      <Button as={Link} to="/admin/add" variant="success">{t("admin.add-product")}</Button>{' '}
      <Button as={Link} to="/admin/maintain" variant="warning">{t("admin.maintain-products")}</Button>{' '}
    </div>
  )
}

export default AdminHome