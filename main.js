const Board = (A_1) => List(Move);
const Board_check_winner = (board_1) => List_fold(null)(null)((move_2) => (current_3) => (() => { const current_P_4 = null; return (() => { const current_some_5 = (current_value_5) => current_3; return (() => { const current_none_6 = (() => { const folder_6 = (direction_6) => (current_7) => (() => { const current_P_8 = null; return (() => { const current_true_9 = Bool_true; return (() => { const current_false_10 = Board_check_winner_check_line(move_2)(2)(board_1)(direction_6); return Bool_match(current_P_8)(current_true_9)(current_false_10)(current_7); })(); })(); })(); return (() => { const directions_7 = List_cons(null)(right)(List_cons(null)(down)(List_cons(null)(bottom_right)(List_cons(null)(bottom_left)(List_nil(null))))); return (() => { const winner_8 = List_fold(null)(null)(folder_6)(Bool_false)(directions_7); return (() => { const winner_P_9 = null; return (() => { const winner_true_10 = (() => { const move_P_10 = null; return (() => { const move_new_11 = (move_player_11) => (move_cell_12) => Maybe_some(null)(move_player_11); return Move_match(move_P_10)(move_new_11)(move_2); })(); })(); return (() => { const winner_false_11 = Maybe_none(null); return Bool_match(winner_P_9)(winner_true_10)(winner_false_11)(winner_8); })(); })(); })(); })(); })(); })(); return Maybe_match(null)(current_P_4)(current_some_5)(current_none_6)(current_3); })(); })(); })())(Maybe_none(null))(board_1);
const Board_check_winner_check_line = (move_1) => (count_2) => (board_3) => (direction_4) => (() => { const move_P_5 = null; return (() => { const move_new_6 = (move_player_6) => (move_cell_7) => (() => { const move_cell_P_8 = null; return (() => { const move_cell_new_9 = (move_cell_fst_9) => (move_cell_snd_10) => (() => { const target_cell_11 = Cell_add(move_cell_7)(direction_4); return (() => { const target_12 = Move_new(move_player_6)(target_cell_11); return (() => { const next_13 = List_find(null)(Move_eq(target_12))(board_3); return (() => { const next_P_14 = null; return (() => { const next_some_15 = (next_value_15) => (() => { const next_count_16 = Math.floor(count_2 - 1); return (() => { const next_count_17_1 = next_count_16; switch (next_count_17_1) { case 0: return Bool_true; default: return ((next_count_17_1 => (() => { const next_count_1_18 = next_count_17_1; return Board_check_winner_check_line(next_value_15)(next_count_16)(board_3)(direction_4); })())((next_count_17_1) - 1)); } })(); })(); return (() => { const next_none_16 = Bool_false; return Maybe_match(null)(next_P_14)(next_some_15)(next_none_16)(next_13); })(); })(); })(); })(); })(); })(); return Pair_match(null)(null)(move_cell_P_8)(move_cell_new_9)(move_cell_7); })(); })(); return Move_match(move_P_5)(move_new_6)(move_1); })(); })();
const Board_sort = (board_1) => List_qsort(null)(board_1)((a_2) => (b_3) => Cell_lt(Move_get_cell(a_2))(Move_get_cell(b_3)))((a_2) => (b_3) => Cell_gte(Move_get_cell(a_2))(Move_get_cell(b_3)));
const Bool = null;
const Bool_and = (a_1) => (b_2) => (() => { const a_P_3 = null; return (() => { const a_true_4 = b_2; return (() => { const a_false_5 = Bool_false; return Bool_match(a_P_3)(a_true_4)(a_false_5)(a_1); })(); })(); })();
const Bool_false = (P_1) => (t_2) => (f_3) => f_3;
const Bool_if = (P_1) => (b_2) => (t_3) => (f_4) => (() => { const b_P_5 = null; return (() => { const b_true_6 = t_3; return (() => { const b_false_7 = f_4; return Bool_match(b_P_5)(b_true_6)(b_false_7)(b_2); })(); })(); })();
const Bool_match = (P_1) => (t_2) => (f_3) => (b_4) => b_4(P_1)(t_2)(f_3);
const Bool_not = (x_1) => (() => { const x_P_2 = null; return (() => { const x_true_3 = Bool_false; return (() => { const x_false_4 = Bool_true; return Bool_match(x_P_2)(x_true_3)(x_false_4)(x_1); })(); })(); })();
const Bool_or = (a_1) => (b_2) => (() => { const a_P_3 = null; return (() => { const a_true_4 = Bool_true; return (() => { const a_false_5 = b_2; return Bool_match(a_P_3)(a_true_4)(a_false_5)(a_1); })(); })(); })();
const Bool_true = (P_1) => (t_2) => (f_3) => t_2;
const Cell = (A_1) => Pair(null)(null);
const Cell_add = (a_1) => (b_2) => (() => { const a_P_3 = null; return (() => { const a_new_4 = (a_fst_4) => (a_snd_5) => (() => { const b_P_6 = null; return (() => { const b_new_7 = (b_fst_7) => (b_snd_8) => Pair_new(null)(null)(Math.floor(a_fst_4 + b_fst_7))(Math.floor(a_snd_5 + b_snd_8)); return Pair_match(null)(null)(b_P_6)(b_new_7)(b_2); })(); })(); return Pair_match(null)(null)(a_P_3)(a_new_4)(a_1); })(); })();
const Cell_eq = (a_1) => (b_2) => (() => { const a_P_3 = null; return (() => { const a_new_4 = (a_fst_4) => (a_snd_5) => (() => { const b_P_6 = null; return (() => { const b_new_7 = (b_fst_7) => (b_snd_8) => (() => { const fstEq_9 = U48_to_bool(Math.floor(a_fst_4 === b_fst_7)); return (() => { const sndEq_10 = U48_to_bool(Math.floor(a_snd_5 === b_snd_8)); return Bool_and(fstEq_9)(sndEq_10); })(); })(); return Pair_match(null)(null)(b_P_6)(b_new_7)(b_2); })(); })(); return Pair_match(null)(null)(a_P_3)(a_new_4)(a_1); })(); })();
const Cell_gte = (a_1) => (b_2) => Bool_not(Cell_lt(a_1)(b_2));
const Cell_lt = (a_1) => (b_2) => (() => { const a_P_3 = null; return (() => { const a_new_4 = (a_fst_4) => (a_snd_5) => (() => { const b_P_6 = null; return (() => { const b_new_7 = (b_fst_7) => (b_snd_8) => (() => { const sndLt_9 = U48_to_bool(Math.floor(a_snd_5 < b_snd_8)); return Bool_if(null)(sndLt_9)(Bool_true)((() => { const fstLt_10 = U48_to_bool(Math.floor(b_snd_8 < a_snd_5)); return Bool_if(null)(fstLt_10)(Bool_false)(U48_to_bool(Math.floor(a_fst_4 < b_fst_7))); })()); })(); return Pair_match(null)(null)(b_P_6)(b_new_7)(b_2); })(); })(); return Pair_match(null)(null)(a_P_3)(a_new_4)(a_1); })(); })();
const Char = null;
const Direction = null;
const Direction_down = (P_1) => (left_2) => (up_3) => (right_4) => (down_5) => down_5;
const Direction_from_keycode = (keycode_1) => U48_if(null)(Math.floor(keycode_1 === Key_leftArrow))(Maybe_some(null)(Direction_left))(U48_if(null)(Math.floor(keycode_1 === Key_upArrow))(Maybe_some(null)(Direction_up))(U48_if(null)(Math.floor(keycode_1 === Key_rightArrow))(Maybe_some(null)(Direction_right))(U48_if(null)(Math.floor(keycode_1 === Key_downArrow))(Maybe_some(null)(Direction_down))(Maybe_none(null)))));
const Direction_left = (P_1) => (left_2) => (up_3) => (right_4) => (down_5) => left_2;
const Direction_match = (P_1) => (left_2) => (up_3) => (right_4) => (down_5) => (direction_6) => direction_6(P_1)(left_2)(up_3)(right_4)(down_5);
const Direction_right = (P_1) => (left_2) => (up_3) => (right_4) => (down_5) => right_4;
const Direction_up = (P_1) => (left_2) => (up_3) => (right_4) => (down_5) => up_3;
const Game = null;
const Game_new = (init_1) => (when_2) => (P_3) => (new_4) => new_4(init_1)(when_2);
const GameState = null;
const GameState_cell_available = (state_1) => (() => { const state_P_2 = null; return (() => { const state_in_progress_3 = (state_current_player_3) => (state_cursor_position_4) => (state_board_5) => (state_debug_mode_6) => (() => { const occupied_cells_7 = List_map(Move)(Cell(null))(state_board_5)(Move_get_cell); return (() => { const cell_occupied_8 = List_find(null)((cell_8) => Cell_eq(cell_8)(state_cursor_position_4))(occupied_cells_7); return Bool_not(Maybe_has_value(null)(cell_occupied_8)); })(); })(); return (() => { const state_draw_4 = (state_board_4) => (state_debug_mode_5) => Bool_false; return (() => { const state_winner_5 = (state_player_5) => (state_board_6) => (state_debug_mode_7) => Bool_false; return GameState_match(state_P_2)(state_in_progress_3)(state_draw_4)(state_winner_5)(state_1); })(); })(); })(); })();
const GameState_draw = (board_1) => (debug_mode_2) => (P_3) => (in_progress_4) => (draw_5) => (winner_6) => draw_5(board_1)(debug_mode_2);
const GameState_get_debug_mode = (state_1) => (() => { const state_P_2 = null; return (() => { const state_in_progress_3 = (state_current_player_3) => (state_cursor_position_4) => (state_board_5) => (state_debug_mode_6) => state_debug_mode_6; return (() => { const state_draw_4 = (state_board_4) => (state_debug_mode_5) => state_debug_mode_5; return (() => { const state_winner_5 = (state_player_5) => (state_board_6) => (state_debug_mode_7) => state_debug_mode_7; return GameState_match(state_P_2)(state_in_progress_3)(state_draw_4)(state_winner_5)(state_1); })(); })(); })(); })();
const GameState_in_progress = (currentPlayer_1) => (cursorPosition_2) => (board_3) => (debug_mode_4) => (P_5) => (in_progress_6) => (draw_7) => (winner_8) => in_progress_6(currentPlayer_1)(cursorPosition_2)(board_3)(debug_mode_4);
const GameState_match = (P_1) => (in_progress_2) => (draw_3) => (winner_4) => (gameState_5) => gameState_5(P_1)(in_progress_2)(draw_3)(winner_4);
const GameState_move_cursor = (state_1) => (direction_2) => (() => { const forward_3 = (n_3) => Math.floor(Math.floor(n_3 + 1) % 3); return (() => { const backward_4 = (n_4) => (() => { const neg1_5 = U48_neg(1); return (() => { const n_6 = Math.floor(n_4 - 1); return U48_if(null)(Math.floor(n_6 === neg1_5))(2)(n_6); })(); })(); return (() => { const state_P_5 = null; return (() => { const state_in_progress_6 = (state_current_player_6) => (state_cursor_position_7) => (state_board_8) => (state_debug_mode_9) => (() => { const position_10 = (() => { const direction_P_10 = null; return (() => { const direction_left_11 = Pair_mapFst(null)(null)(null)(state_cursor_position_7)(backward_4); return (() => { const direction_up_12 = Pair_mapSnd(null)(null)(null)(state_cursor_position_7)(backward_4); return (() => { const direction_right_13 = Pair_mapFst(null)(null)(null)(state_cursor_position_7)(forward_3); return (() => { const direction_down_14 = Pair_mapSnd(null)(null)(null)(state_cursor_position_7)(forward_3); return Direction_match(direction_P_10)(direction_left_11)(direction_up_12)(direction_right_13)(direction_down_14)(direction_2); })(); })(); })(); })(); })(); return GameState_in_progress(state_current_player_6)(position_10)(state_board_8)(state_debug_mode_9); })(); return (() => { const state_draw_7 = (state_board_7) => (state_debug_mode_8) => state_1; return (() => { const state_winner_8 = (state_player_8) => (state_board_9) => (state_debug_mode_10) => state_1; return GameState_match(state_P_5)(state_in_progress_6)(state_draw_7)(state_winner_8)(state_1); })(); })(); })(); })(); })(); })();
const GameState_new = (A_1) => (() => { const initial_cell_2 = Pair_new(null)(null)(0)(0); return GameState_in_progress(Player_x)(initial_cell_2)(List_nil(null))(Bool_false); })();
const GameState_put_move = (state_1) => (() => { const state_P_2 = null; return (() => { const state_in_progress_3 = (state_current_player_3) => (state_cursor_position_4) => (state_board_5) => (state_debug_mode_6) => (() => { const cell_available_7 = GameState_cell_available(state_1); return (() => { const cell_available_P_8 = null; return (() => { const cell_available_true_9 = (() => { const player_9 = Player_switch(state_current_player_3); return (() => { const move_10 = Move_new(state_current_player_3)(state_cursor_position_4); return (() => { const board_11 = List_concat(null)(state_board_5)(List_cons(null)(move_10)(List_nil(null))); return (() => { const board_12 = Board_sort(board_11); return (() => { const winner_player_13 = Board_check_winner(board_12); return (() => { const winner_player_P_14 = null; return (() => { const winner_player_some_15 = (winner_player_value_15) => GameState_winner(winner_player_value_15)(board_12)(state_debug_mode_6); return (() => { const winner_player_none_16 = (() => { const length_16 = List_length(null)(board_12); return (() => { const length_17 = U48_from_nat(length_16); return U48_if(null)(Math.floor(length_17 === 9))(GameState_draw(board_12)(state_debug_mode_6))(GameState_in_progress(player_9)(state_cursor_position_4)(board_12)(state_debug_mode_6)); })(); })(); return Maybe_match(null)(winner_player_P_14)(winner_player_some_15)(winner_player_none_16)(winner_player_13); })(); })(); })(); })(); })(); })(); })(); })(); return (() => { const cell_available_false_10 = state_1; return Bool_match(cell_available_P_8)(cell_available_true_9)(cell_available_false_10)(cell_available_7); })(); })(); })(); })(); return (() => { const state_draw_4 = (state_board_4) => (state_debug_mode_5) => state_1; return (() => { const state_winner_5 = (state_player_5) => (state_board_6) => (state_debug_mode_7) => state_1; return GameState_match(state_P_2)(state_in_progress_3)(state_draw_4)(state_winner_5)(state_1); })(); })(); })(); })();
const GameState_restart = (state_1) => (() => { const initial_cell_2 = Pair_new(null)(null)(0)(0); return GameState_in_progress(Player_x)(initial_cell_2)(List_nil(null))(GameState_get_debug_mode(state_1)); })();
const GameState_switch_debug_mode = (state_1) => (() => { const current_debug_mode_2 = GameState_get_debug_mode(state_1); return (() => { const debug_mode_3 = Bool_not(current_debug_mode_2); return (() => { const state_P_4 = null; return (() => { const state_in_progress_5 = (state_current_player_5) => (state_cursor_position_6) => (state_board_7) => (state_debug_mode_8) => GameState_in_progress(state_current_player_5)(state_cursor_position_6)(state_board_7)(debug_mode_3); return (() => { const state_draw_6 = (state_board_6) => (state_debug_mode_7) => GameState_draw(state_board_6)(debug_mode_3); return (() => { const state_winner_7 = (state_player_7) => (state_board_8) => (state_debug_mode_9) => GameState_winner(state_player_7)(state_board_8)(debug_mode_3); return GameState_match(state_P_4)(state_in_progress_5)(state_draw_6)(state_winner_7)(state_1); })(); })(); })(); })(); })(); })();
const GameState_winner = (player_1) => (board_2) => (debug_mode_3) => (P_4) => (in_progress_5) => (draw_6) => (winner_7) => winner_7(player_1)(board_2)(debug_mode_3);
const Key = null;
const Key_d = 68;
const Key_downArrow = 40;
const Key_enter = 13;
const Key_leftArrow = 37;
const Key_o = 79;
const Key_r = 82;
const Key_rightArrow = 39;
const Key_upArrow = 38;
const Key_x = 88;
const List = (T_1) => null;
const List_concat = (T_1) => (xs_2) => (ys_3) => (() => { const xs_P_4 = null; return (() => { const xs_cons_5 = (xs_head_5) => (xs_tail_6) => List_cons(null)(xs_head_5)(List_concat(null)(xs_tail_6)(ys_3)); return (() => { const xs_nil_6 = ys_3; return List_match(null)(xs_P_4)(xs_cons_5)(xs_nil_6)(xs_2); })(); })(); })();
const List_cons = (T_1) => (head_2) => (tail_3) => (P_4) => (cons_5) => (nil_6) => cons_5(head_2)(tail_3);
const List_filter = (A_1) => (cond_2) => (list_3) => (() => { const list_P_4 = null; return (() => { const list_cons_5 = (list_head_5) => (list_tail_6) => (() => { const test_7 = cond_2(list_head_5); return (() => { const head_8 = (() => { const test_P_8 = (test_8) => null; return (() => { const test_true_9 = List_cons(null)(list_head_5); return (() => { const test_false_10 = (x_10) => x_10; return Bool_match(test_P_8)(test_true_9)(test_false_10)(test_7); })(); })(); })(); return (() => { const tail_9 = List_filter(null)(cond_2)(list_tail_6); return head_8(tail_9); })(); })(); })(); return (() => { const list_nil_6 = List_nil(null); return List_match(null)(list_P_4)(list_cons_5)(list_nil_6)(list_3); })(); })(); })();
const List_find = (A_1) => (fn_2) => (xs_3) => (() => { const xs_P_4 = null; return (() => { const xs_cons_5 = (xs_head_5) => (xs_tail_6) => (() => { const result_7 = fn_2(xs_head_5); return (() => { const result_P_8 = null; return (() => { const result_true_9 = Maybe_some(null)(xs_head_5); return (() => { const result_false_10 = List_find(null)(fn_2)(xs_tail_6); return Bool_match(result_P_8)(result_true_9)(result_false_10)(result_7); })(); })(); })(); })(); return (() => { const xs_nil_6 = Maybe_none(null); return List_match(null)(xs_P_4)(xs_cons_5)(xs_nil_6)(xs_3); })(); })(); })();
const List_fold = (A_1) => (P_2) => (c_3) => (n_4) => (xs_5) => (() => { const xs_P_6 = null; return (() => { const xs_cons_7 = (xs_head_7) => (xs_tail_8) => c_3(xs_head_7)(List_fold(null)(P_2)(c_3)(n_4)(xs_tail_8)); return (() => { const xs_nil_8 = n_4; return List_match(null)(xs_P_6)(xs_cons_7)(xs_nil_8)(xs_5); })(); })(); })();
const List_length = (A_1) => (xs_2) => (() => { const xs_P_3 = null; return (() => { const xs_cons_4 = (xs_head_4) => (xs_tail_5) => Nat_succ(List_length(null)(xs_tail_5)); return (() => { const xs_nil_5 = Nat_zero; return List_match(null)(xs_P_3)(xs_cons_4)(xs_nil_5)(xs_2); })(); })(); })();
const List_map = (A_1) => (B_2) => (xs_3) => (fn_4) => (() => { const xs_P_5 = null; return (() => { const xs_cons_6 = (xs_head_6) => (xs_tail_7) => (() => { const head_8 = fn_4(xs_head_6); return (() => { const tail_9 = List_map(null)(null)(xs_tail_7)(fn_4); return List_cons(null)(head_8)(tail_9); })(); })(); return (() => { const xs_nil_7 = List_nil(null); return List_match(null)(xs_P_5)(xs_cons_6)(xs_nil_7)(xs_3); })(); })(); })();
const List_match = (A_1) => (P_2) => (c_3) => (n_4) => (xs_5) => xs_5(P_2)(c_3)(n_4);
const List_nil = (T_1) => (P_2) => (cons_3) => (nil_4) => nil_4;
const List_qsort = (A_1) => (list_2) => (lt_3) => (gte_4) => (() => { const list_P_5 = null; return (() => { const list_cons_6 = (list_head_6) => (list_tail_7) => (() => { const lesser_8 = List_filter(null)(gte_4(list_head_6))(list_tail_7); return (() => { const greater_9 = List_filter(null)(lt_3(list_head_6))(list_tail_7); return List_concat(null)(List_qsort(null)(lesser_8)(lt_3)(gte_4))(List_cons(null)(list_head_6)(List_qsort(null)(greater_9)(lt_3)(gte_4))); })(); })(); return (() => { const list_nil_7 = List_nil(null); return List_match(null)(list_P_5)(list_cons_6)(list_nil_7)(list_2); })(); })(); })();
const Maybe = (T_1) => null;
const Maybe_has_value = (A_1) => (maybe_2) => (() => { const maybe_P_3 = null; return (() => { const maybe_some_4 = (maybe_value_4) => Bool_true; return (() => { const maybe_none_5 = Bool_false; return Maybe_match(null)(maybe_P_3)(maybe_some_4)(maybe_none_5)(maybe_2); })(); })(); })();
const Maybe_match = (A_1) => (P_2) => (s_3) => (n_4) => (ma_5) => ma_5(P_2)(s_3)(n_4);
const Maybe_none = (T_1) => (P_2) => (some_3) => (none_4) => none_4;
const Maybe_some = (T_1) => (value_2) => (P_3) => (some_4) => (none_5) => some_4(value_2);
const Move = null;
const Move_eq = (a_1) => (b_2) => (() => { const a_P_3 = null; return (() => { const a_new_4 = (a_player_4) => (a_cell_5) => (() => { const b_P_6 = null; return (() => { const b_new_7 = (b_player_7) => (b_cell_8) => Bool_and(Player_eq(a_player_4)(b_player_7))(Cell_eq(a_cell_5)(b_cell_8)); return Move_match(b_P_6)(b_new_7)(b_2); })(); })(); return Move_match(a_P_3)(a_new_4)(a_1); })(); })();
const Move_get_cell = (move_1) => (() => { const move_P_2 = null; return (() => { const move_new_3 = (move_player_3) => (move_cell_4) => move_cell_4; return Move_match(move_P_2)(move_new_3)(move_1); })(); })();
const Move_match = (P_1) => (new_2) => (move_3) => move_3(P_1)(new_2);
const Move_new = (player_1) => (cell_2) => (P_3) => (new_4) => new_4(player_1)(cell_2);
const Nat = null;
const Nat_match = (P_1) => (s_2) => (z_3) => (n_4) => n_4(P_1)(s_2)(z_3);
const Nat_succ = (n_1) => (P_2) => (succ_3) => (zero_4) => succ_3(n_1);
const Nat_zero = (P_1) => (succ_2) => (zero_3) => zero_3;
const Pair = (A_1) => (B_2) => null;
const Pair_mapFst = (A_1) => (B_2) => (T_3) => (p_4) => (f_5) => (() => { const p_P_6 = null; return (() => { const p_new_7 = (p_fst_7) => (p_snd_8) => Pair_new(T_3)(B_2)(f_5(p_fst_7))(p_snd_8); return Pair_match(null)(null)(p_P_6)(p_new_7)(p_4); })(); })();
const Pair_mapSnd = (A_1) => (B_2) => (T_3) => (p_4) => (f_5) => (() => { const p_P_6 = null; return (() => { const p_new_7 = (p_fst_7) => (p_snd_8) => Pair_new(A_1)(T_3)(p_fst_7)(f_5(p_snd_8)); return Pair_match(null)(null)(p_P_6)(p_new_7)(p_4); })(); })();
const Pair_match = (A_1) => (B_2) => (P_3) => (new_4) => (pair_5) => pair_5(P_3)(new_4);
const Pair_new = (A_1) => (B_2) => (a_3) => (b_4) => (P_5) => (new_6) => new_6(a_3)(b_4);
const Player = null;
const Player_eq = (a_1) => (b_2) => Bool_or(Bool_and(Player_is_x(a_1))(Player_is_x(b_2)))(Bool_and(Player_is_o(a_1))(Player_is_o(b_2)));
const Player_is_o = (player_1) => (() => { const player_P_2 = null; return (() => { const player_x_3 = Bool_false; return (() => { const player_o_4 = Bool_true; return Player_match(player_P_2)(player_x_3)(player_o_4)(player_1); })(); })(); })();
const Player_is_x = (player_1) => (() => { const player_P_2 = null; return (() => { const player_x_3 = Bool_true; return (() => { const player_o_4 = Bool_false; return Player_match(player_P_2)(player_x_3)(player_o_4)(player_1); })(); })(); })();
const Player_match = (P_1) => (x_2) => (o_3) => (p_4) => p_4(P_1)(x_2)(o_3);
const Player_o = (P_1) => (x_2) => (o_3) => o_3;
const Player_switch = (player_1) => (() => { const player_P_2 = null; return (() => { const player_x_3 = Player_o; return (() => { const player_o_4 = Player_x; return Player_match(player_P_2)(player_x_3)(player_o_4)(player_1); })(); })(); })();
const Player_x = (P_1) => (x_2) => (o_3) => x_2;
const String = List(Char);
const String_cons = (head_1) => (tail_2) => (P_3) => (cons_4) => (nil_5) => cons_4(head_1)(tail_2);
const String_nil = (P_1) => (cons_2) => (nil_3) => nil_3;
const U48_from_nat = (n_1) => (() => { const n_P_2 = null; return (() => { const n_succ_3 = (n_pred_3) => Math.floor(1 + U48_from_nat(n_pred_3)); return (() => { const n_zero_4 = 0; return Nat_match(n_P_2)(n_succ_3)(n_zero_4)(n_1); })(); })(); })();
const U48_if = (P_1) => (x_2) => (t_3) => (f_4) => (() => { const x_5_1 = x_2; switch (x_5_1) { case 0: return f_4; default: return ((x_5_1 => (() => { const x_1_6 = x_5_1; return t_3; })())((x_5_1) - 1)); } })();
const U48_neg = (n_1) => Math.floor(0 - n_1);
const U48_to_bool = (x_1) => (() => { const x_2_1 = x_1; switch (x_2_1) { case 0: return Bool_false; default: return ((x_2_1 => (() => { const x_1_3 = x_2_1; return Bool_true; })())((x_2_1) - 1)); } })();
const bottom_left = Pair_new(null)(null)(U48_neg(1))(1);
const bottom_right = Pair_new(null)(null)(1)(1);
const down = Pair_new(null)(null)(0)(1);
const main = (() => { const init_1 = GameState_new(null); return (() => { const when_2 = (key_2) => (state_3) => (() => { const pressing_4 = (keycode_4) => U48_to_bool(Math.floor(key_2 === keycode_4)); return Bool_if(null)(pressing_4(Key_r))(GameState_restart(state_3))(Bool_if(null)(pressing_4(Key_d))(GameState_switch_debug_mode(state_3))((() => { const state_P_5 = null; return (() => { const state_in_progress_6 = (state_current_player_6) => (state_cursor_position_7) => (state_board_8) => (state_debug_mode_9) => Bool_if(null)(pressing_4(Key_enter))(GameState_put_move(state_3))(Bool_if(null)(Bool_and(pressing_4(Key_x))(state_debug_mode_9))(GameState_in_progress(Player_x)(state_cursor_position_7)(state_board_8)(state_debug_mode_9))(Bool_if(null)(Bool_and(pressing_4(Key_o))(state_debug_mode_9))(GameState_in_progress(Player_o)(state_cursor_position_7)(state_board_8)(state_debug_mode_9))((() => { const direction_10 = Direction_from_keycode(key_2); return (() => { const direction_P_11 = null; return (() => { const direction_some_12 = (direction_value_12) => GameState_move_cursor(state_3)(direction_value_12); return (() => { const direction_none_13 = state_3; return Maybe_match(null)(direction_P_11)(direction_some_12)(direction_none_13)(direction_10); })(); })(); })(); })()))); return (() => { const state_draw_7 = (state_board_7) => (state_debug_mode_8) => state_3; return (() => { const state_winner_8 = (state_player_8) => (state_board_9) => (state_debug_mode_10) => state_3; return GameState_match(state_P_5)(state_in_progress_6)(state_draw_7)(state_winner_8)(state_3); })(); })(); })(); })())); })(); return Game_new(init_1)(when_2); })(); })();
const o = (P_1) => (x_2) => (o_3) => o_3;
const right = Pair_new(null)(null)(1)(0);
const x = (P_1) => (x_2) => (o_3) => x_2;

