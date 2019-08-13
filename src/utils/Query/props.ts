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
    onLoading: boolean
    error: any | null
    data: any | null
}

export interface Props {
    /**
     * 
     * @param apiKey apikey service
     * @param apiUrl apiUrl @example https://hooks.youngapp.co/new-hook--
     */
    apiKey: string
    apiUrl: string

    /** Model to fetch data */
    model: string

    /** Type of query */
    type: 'create' | 'update' | 'delete' | 'findOne' | 'findAll' | 'count'

    /** Parameters for yap-sdk */
    values?: any
    where?: any
    limit?: number
    offset?: number
    projection?: string[]
    orderWay?: 'asc' | 'desc'
    orderBy?: string

    // Children 
    children: (p: Response) => any
}