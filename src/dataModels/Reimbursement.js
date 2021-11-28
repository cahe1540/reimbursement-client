export class Reimbursement {
  /**
   *
   * @param {Number} reimbursementId
   * @param {Number} createdAt
   * @param {Number} amount
   * @param {String} reason
   * @param {String} state
   * @param {String} file
   * @param {Number} employeeId
   * @param {Number} managerId
   * @param {String} managerMessage
   */
  constructor({
    reimbursementId,
    createdAt,
    amount,
    reason,
    state,
    file,
    employeeId,
    managerId,
    managerMessage,
  }) {
    this.reimbursementId = reimbursementId || 0;
    this.createdAt = createdAt || 0;
    this.amount = (amount * 1).toFixed(2).toString() || "0";
    this.reason = reason || "";
    this.state = state || "";
    this.file = file || null;
    this.employeeId = employeeId;
    this.managerId = managerId || null;
    this.managerMessage = managerMessage || null;
  }
}
