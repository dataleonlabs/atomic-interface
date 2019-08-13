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
          {({ data, error, onLoading }) => {
            // On loading
            if (onLoading === true) {
              return (
                <Table {...rest} data={[]} loading={true}>{children}</Table>
              )
            }

            // On error
            if (error) {
              return (
                <Alert color={'danger'}>{error}</Alert>
              )
            }

            // On data
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
