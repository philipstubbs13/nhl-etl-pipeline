import { ExportToCsv } from 'export-to-csv';
import { IDownloadPlayerCsvResponseData, IDownloadTeamCsvResponseData } from '../shared.types';

export const exportToCsv = (headers: string[], data: IDownloadPlayerCsvResponseData | IDownloadTeamCsvResponseData, title: string): void => {
  const options = { 
      fieldSeparator: ',',
      showLabels: true, 
      showTitle: true,
      title,
      useTextFile: false,
      useBom: true,
      headers,
    };
    const csvExporter = new ExportToCsv(options);
      
    csvExporter.generateCsv(data);
}