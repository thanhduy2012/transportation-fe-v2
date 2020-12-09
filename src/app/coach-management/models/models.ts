export interface Coach{
    id?: number;
    licensePlate?: string;
    color?: string;
    manufacturer?: string;
    model?: string;
    seatNumber?: number;
    lastDateMaintenance?: string;
    fromLastDateMaintenance?: string;
    toLastDateMaintenance?: string;
    createdBy?: string;
    createdDate?: string;
    updatedBy?: string;
    updatedDate?: string;
}

export interface GetListCoachPagingByCoachRequest{
    coach?:Coach;
    pageNumber?: number;
    pageSize?: number;
}

export interface GetListCoachPagingByCoachResponse{
    page?: {
        content?: Coach[],
        totalPages?: number,
        pageSize?: number,
        currentPage?: number,
        totalElements?: number
      }
}
export interface AddCoachRequest{
    coach?:Coach
}
export interface AddCoachResponse{
    coach?:Coach
}

export interface UpdateCoachRequest{
    coach:Coach
}
export interface UpdateCoachResponse{
    coach:Coach
}


export interface DeleteCoachRequest{
    id?:Number
}

export interface DeleteCoachResponse{
    coach:Coach
}