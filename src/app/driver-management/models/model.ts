export interface Driver{
    id?: string;
    name?: string;

    identityCard?: string;

    licenseDriver?: string;

    typeLicenseDriver?: string;

    address?: string;

    dateOfBirth?: string;

    fromDOB?: string;

    toDOB?: string;


    seniority?: number;

    createdBy?: string;

    createdDate?: string;

    updatedBy?: string;

    updatedDate?: string;
}

export interface GetListDriverPagingByDriverRequest{
    driver?:Driver;
    pageNumber?: number;
    pageSize?: number;
}

export interface GetListDriverPagingByDriverResponse{
    page?: {
        content?: Driver[],
        totalPages?: number,
        pageSize?: number,
        currentPage?: number,
        totalElements?: number
      }
}
export interface AddDriverRequest{
    driver?:Driver
}
export interface AddDriverResponse{
    driver?:Driver
}

export interface UpdateDriverRequest{
    driver:Driver
}
export interface UpdateDriverResponse{
    driver:Driver
}


export interface DeleteDriverRequest{
    id?:Number
}

export interface DeleteDriverResponse{
    driver:Driver
}