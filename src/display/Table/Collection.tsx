import React from 'react';
import { TableCollectionProps as Props } from './props';
import Table from './index';
import Query from '../../utils/Query/index';
import Alert from '../Alert/index';

class Collection extends React.Component<Props> {

  public render() {
    const {children, ...rest} = this.props
    return (
      <>
        <Query {...this.props}>
          {({ data, error, onLoading }) => /* istanbul ignore next */  {
            // On loading
          /* istanbul ignore next */
            if (onLoading === true) /* istanbul ignore next */  {
              return (
                <Table {...rest} data={[]} loading={true}>{children}</Table>
              )
            }

            // On error
            /* istanbul ignore next */
            if (error) /* istanbul ignore next  */ {
              return (
                <Alert color={'danger'}>{error && error.message ? error.message : error}</Alert>
              )
            }

            // On data
          /* istanbul ignore next */
            return (
              <Table {...rest} data={data} loading={false}>{children}</Table>
            );
          }}
        </Query>
    
      </>
    );
  }
}

export default Collection
