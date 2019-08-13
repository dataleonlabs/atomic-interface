/**
 * Follow fetch data
 * @example
 *  <Query model="User">
 *    {(result) => (
 *       <Text>{result}</Text>
 *    )}
 *  </Query>
 */
export interface Response {
    onLoading: boolean;
    loaded: boolean;
    error: any | null;
    data: any | null;
}
export interface Stats {
    contentRendered: null | any;
    onRendering: boolean;
}
export interface QueryProps {
    /**
     *
     * @param apiKey apikey service
     * @param apiUrl apiUrl @example https://hooks.youngapp.co/new-hook--
     */
    apiKey: string;
    apiUrl: string;
    /** Model to fetch data */
    model: string;
    /** Type of query */
    type: 'create' | 'update' | 'delete' | 'findOne' | 'findAll' | 'count';
    /** Parameters for yap-sdk */
    values?: {
        [key: string]: any;
    };
    where?: {
        [key: string]: any;
    };
    limit?: number;
    offset?: number;
    projection?: string[];
    orderWay?: 'asc' | 'desc';
    orderBy?: string;
    onLoading?: () => void;
    onLoaded?: (p: any) => void;
    onError?: (error: any) => void;
    children: (p: Response) => any;
}
