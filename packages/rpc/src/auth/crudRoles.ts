export const allRoles = new Set<string>();

export const crudRoles = (entityName: string) => {
  entityName = entityName.toLowerCase();

  const roles = {
    create: `create_${entityName}`,
    read: `read_${entityName}`,
    update: `update_${entityName}`,
    delete: `delete_${entityName}`,
    update_status: `update_status_${entityName}`
  };

  const all = Object.values(roles);

  all.forEach((role) => allRoles.add(role));

  return {
    ...roles,
    all
  };
};
