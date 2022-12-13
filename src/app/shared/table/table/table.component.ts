import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../../../models/user.model";
import {ButtonType, ColumnConfig, RowAction, TableConfig} from "../models/table-config.model";
import {propertiesToValue} from "../../utils/utility-function";
import {MatPaginator} from "@angular/material/paginator";
import {Logger} from "../../../services/logger.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tableConfig: TableConfig;
  displayColumns: string[];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.tableConfig.findDataCb().subscribe((data) => {
      this.dataSource.data = data;
    });

    this.displayColumns = this.tableConfig.columns.map((config) => {
      return config.columnName;
    });

    if(this.tableConfig.actions.length > 0)
    {
      this.displayColumns.push('actions');
    }
    Logger.log('columns', this.displayColumns)

    this.dataSource.paginator = this.paginator;
  }

  getValue(data: any, columnDef: ColumnConfig) {
    const prop = columnDef.value;
    const propertyValue = `${columnDef.value}_customValue`;

    if (columnDef.valueCb && !data.hasOwnProperty(propertyValue)) {
      data[propertyValue] = columnDef.valueCb(data);
    }

    if (data.hasOwnProperty(propertyValue)) {
      return data[propertyValue];
    }

    if (data.hasOwnProperty(prop)) {
      return data[prop];
    }

    data[prop] = propertiesToValue(prop, data);
    return data[prop];
  }

  getClass(action: RowAction)
  {
    switch (action.type) {
      case ButtonType.DANGER:
        return 'btn btn-danger';
      case ButtonType.SUBMIT:
        return 'btn btn-primary';
      case ButtonType.SUCCESS:
        return 'btn btn-success';
      case ButtonType.WARNING:
        return 'btn btn-warning';
    }
  }
}
