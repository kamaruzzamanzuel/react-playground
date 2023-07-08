import Basic from './MuiDataGridExamples/Basic';
import CustomHeaderFilter from './MuiDataGridExamples/CustomHeaderFilter';
import ExpandableTreeData from './MuiDataGridExamples/ExpandableTreeData';

const MuiDataGrid = () => {
  return (
    <div className='bg-white p-10 w-full'>
      <Basic />
      <ExpandableTreeData />
      <CustomHeaderFilter />
    </div>
  );
}

export default MuiDataGrid;