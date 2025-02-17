import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/TableTwo';
import { TableUsers } from '../components/Tables/TableUsers';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableUsers />
        {/* <TableOne />
        <TableTwo />
        <TableThree /> */}
      </div>
    </>
  );
};

export default Tables;
