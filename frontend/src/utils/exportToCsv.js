import { ExportToCsv } from 'export-to-csv';

export const exportToCsv = (headers, data, title) => {
  const options = { 
      fieldSeparator: ',',
      showLabels: true, 
      showTitle: true,
      title,
      useTextFile: false,
      useBom: true,
      headers: headers,
    };
    const csvExporter = new ExportToCsv(options);
      
    csvExporter.generateCsv(data);
}