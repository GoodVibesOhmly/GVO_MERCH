const validateAllProductsTaxonomyId = (taxonomyId)=>{
    if (!taxonomyId || taxonomyId === "false") {
        return false;
    }
    if (typeof taxonomyId === "string") {
        return taxonomyId;
    }
    throw new TypeError("taxonomyId must be a string or falsy.");
};
export default validateAllProductsTaxonomyId;
