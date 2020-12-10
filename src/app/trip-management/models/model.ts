export interface Trip{
    id?: string;

    code?: string;

    numberGuest?: number;

    price?: number;

    status?: number;

    createdDate?: string;

    createdBy?: string;

    updatedDate?: string;

    updatedBy?: string;
}

export interface GetListTripPagingByTripRequest{
    trip?:Trip;
    pageNumber?: number;
    pageSize?: number;
}

export interface GetListTripPagingByTripResponse{
    page?: {
        content?: Trip[],
        totalPages?: number,
        pageSize?: number,
        currentPage?: number,
        totalElements?: number
      }
}
export interface AddTripRequest{
    trip?:Trip
}
export interface AddTripResponse{
    trip?:Trip
}

export interface UpdateTripRequest{
    trip:Trip
}
export interface UpdateTripResponse{
    trip:Trip
}


export interface DeleteTripRequest{
    id?:Number
}

export interface DeleteTripResponse{
    trip:Trip
}