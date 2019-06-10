import { bs, sizes, colors } from "../../theme";

const styles = {
  container: {
    ...bs.match_parent,
    ...bs.start_center,
    ...bs.bg_white
  },
  topContainer: {
    ...bs.full_width,
    ...bs.pt_8x,
    ...bs.pl_8x
  },
  icon: {
    ...bs.mb_4x,
    height: sizes.em(60),
    width: sizes.em(60),
    borderRadius: sizes.em(14)
  },
  form: {
    ...bs.full_width,
    ...bs.pv_8x,
    ...bs.ph_8x
  },
  row: {
    ...bs.flex_row
  },
  formRow: {
    ...bs.flex_row,
    ...bs.between_center,
    ...bs.mb_2x
  },
  formRow2: {
    ...bs.flex_row,
    ...bs.between_center
  },
  btnRegister: {
    ...bs.center,
    ...bs.full_width,
    ...bs.absolute,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    height: sizes.em(45)
  }
};

export default styles;
