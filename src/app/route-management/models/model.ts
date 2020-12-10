export interface Route{
    id?: string;
    firstLocation?: string;

   lastLocation?: string;

    length?: string;

    createdBy?: string;

    complexityId?: number;

    createdDate?: string;

    updatedBy?: string;

    updatedDate?: string;
}

export interface GetListRoutePagingByRouteRequest{
    route?:Route;
    pageNumber?: number;
    pageSize?: number;
}

export interface GetListRoutePagingByRouteResponse{
    page?: {
        content?: Route[],
        totalPages?: number,
        pageSize?: number,
        currentPage?: number,
        totalElements?: number
      }
}
export interface AddRouteRequest{
    route?:Route
}
export interface AddRouteResponse{
    route?:Route
}

export interface UpdateRouteRequest{
    route:Route
}
export interface UpdateRouteResponse{
    route:Route
}


export interface DeleteRouteRequest{
    id?:Number
}

export interface DeleteRouteResponse{
    route:Route
}