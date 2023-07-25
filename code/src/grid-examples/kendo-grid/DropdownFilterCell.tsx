
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { GridFilterCellProps } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';

interface DropdownFilterCellProps extends GridFilterCellProps {
  defaultItem: { text: string; value: any; },
  data: any[]
  options: { text: string; value: any; }[]
}

export const DropdownFilterCell = (props: DropdownFilterCellProps) => {
  console.log({ props })
  let hasValue: any = (value: any) => Boolean(value != null && value.value !== props.defaultItem.value);

  const onChange = (event: DropDownListChangeEvent) => {
    hasValue = hasValue(event.target.value);
    console.log({ v: event.target.value });

    props.onChange({
      value: hasValue ? event.target.value.value : "",
      operator: hasValue ? 'eq' : '',
      syntheticEvent: event.syntheticEvent
    });
  };

  const onClearButtonClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.onChange({
      value: '',
      operator: '',
      syntheticEvent: event
    });
  };

  return (
    <div className="k-filtercell">
      <DropDownList
        // data={props.data}
        // data={props.options.map(x => x.text)}
        data={props.options}
        textField='text'
        onChange={onChange}
        value={(props.options.find(x => x.value === props.value)) ?? props.defaultItem}
        defaultItem={props.defaultItem}
      />

      <Button
        title="Clear"
        disabled={!hasValue(props.value)}
        onClick={onClearButtonClick}
        icon="filter-clear"
      />
    </div>
  );
}