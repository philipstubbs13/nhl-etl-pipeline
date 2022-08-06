import { IValueLabelOption } from "../components/ui/ui-select/UiSelect.types";
import { NhlActions } from "../reducers/nhlReducer.types";

export interface INhlContext {
  dispatch: React.Dispatch<NhlActions>;
  selectedSeason: number;
  selectedTeam: any;
  selectedTeamId: number;
  teams: IValueLabelOption<number, string>[];
}