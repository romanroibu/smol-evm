/**
 * @see https://www.evm.codes
 */
export enum Opcode {
  /**
   * Halts execution
   *
   * @input <none>
   * @output <none>
   *
   * @see https://www.evm.codes/#00
   */
  STOP = 0x00,

  /**
   * Addition operation
   *
   * @input `a`, `b`
   * @output `a + b`
   *
   * @see https://www.evm.codes/#01
   */
  ADD = 0x01,

  /**
   * Multiplication operation
   *
   * @input `a`, `b`
   * @output `a * b`
   *
   * @see https://www.evm.codes/#02
   */
  MUL = 0x02,

  /**
   * Subtraction operation
   *
   * @input `a`, `b`
   * @output `a - b`
   *
   * @see https://www.evm.codes/#03
   */
  SUB = 0x03,

  /**
   * Integer division operation
   *
   * @input `a`, `b`
   * @output `a // b`
   *
   * @see https://www.evm.codes/#04
   */
  DIV = 0x04,

  /**
   * Signed integer division operation (truncated)
   *
   * @input `a`, `b`
   * @output `a // b`
   *
   * @see https://www.evm.codes/#05
   */
  SDIV = 0x05,

  /**
   * Modulo remainder operation
   *
   * @input `a`, `b`
   * @output `a % b`
   *
   * @see https://www.evm.codes/#06
   */
  MOD = 0x06,

  /**
   * Signed modulo remainder operation
   *
   * @input `a`, `b`
   * @output `a % b`
   *
   * @see https://www.evm.codes/#07
   */
  SMOD = 0x07,

  /**
   * Modulo addition operation
   *
   * @input `a`, `b`, `N`
   * @output `(a + b) % N`
   *
   * @see https://www.evm.codes/#08
   */
  ADDMOD = 0x08,

  /**
   * Modulo multiplication operation
   *
   * @input `a`, `b`, `N`
   * @output `(a * b) % N`
   *
   * @see https://www.evm.codes/#09
   */
  MULMOD = 0x09,

  /**
   * Exponential operation
   *
   * @input `a`, `exponent`
   * @output `a ** exponent`
   *
   * @see https://www.evm.codes/#0A
   */
  EXP = 0x0A,

  /**
   * Extend length of two’s complement signed integer
   *
   * @input `b`, `x`
   * @output `y`
   *
   * @see https://www.evm.codes/#0B
   */
  SIGNEXTEND = 0x0B,

  /**
   * Less-than comparison
   *
   * @input `a`, `b`
   * @output `a < b`
   *
   * @see https://www.evm.codes/#10
   */
  LT = 0x10,

  /**
   * Greater-than comparison
   *
   * @input `a`, `b`
   * @output `a > b`
   *
   * @see https://www.evm.codes/#11
   */
  GT = 0x11,

  /**
   * Signed less-than comparison
   *
   * @input `a`, `b`
   * @output `a < b`
   *
   * @see https://www.evm.codes/#12
   */
  SLT = 0x12,

  /**
   * Signed greater-than comparison
   *
   * @input `a`, `b`
   * @output `a > b`
   *
   * @see https://www.evm.codes/#13
   */
  SGT = 0x13,

  /**
   * Equality comparison
   *
   * @input `a`, `b`
   * @output `a == b`
   *
   * @see https://www.evm.codes/#14
   */
  EQ = 0x14,

  /**
   * Is-zero comparison
   *
   * @input `a`
   * @output `a == 0`
   *
   * @see https://www.evm.codes/#15
   */
  ISZERO = 0x15,

  /**
   * Bitwise AND operation
   *
   * @input `a`, `b`
   * @output `a & b`
   *
   * @see https://www.evm.codes/#16
   */
  AND = 0x16,

  /**
   * Bitwise OR operation
   *
   * @input `a`, `b`
   * @output `a | b`
   *
   * @see https://www.evm.codes/#17
   */
  OR = 0x17,

  /**
   * Bitwise XOR operation
   *
   * @input `a`, `b`
   * @output `a ^ b`
   *
   * @see https://www.evm.codes/#18
   */
  XOR = 0x18,

  /**
   * Bitwise NOT operation
   *
   * @input `a`
   * @output `~a`
   *
   * @see https://www.evm.codes/#19
   */
  NOT = 0x19,

  /**
   * Retrieve single byte from word
   *
   * @input `i`, `x`
   * @output `y`
   *
   * @see https://www.evm.codes/#1A
   */
  BYTE = 0x1A,

  /**
   * Left shift operation
   *
   * @input `shift`, `value`
   * @output `value << shift`
   *
   * @see https://www.evm.codes/#1B
   */
  SHL = 0x1B,

  /**
   * Logical right shift operation
   *
   * @input `shift`, `value`
   * @output `value >> shift`
   *
   * @see https://www.evm.codes/#1C
   */
  SHR = 0x1C,

  /**
   * Arithmetic (signed) right shift operation
   *
   * @input `shift`, `value`
   * @output `value >> shift`
   *
   * @see https://www.evm.codes/#1D
   */
  SAR = 0x1D,

  /**
   * Compute Keccak-256 hash
   *
   * @input `offset`, `size`
   * @output `hash`
   *
   * @see https://www.evm.codes/#20
   */
  KECCAK256 = 0x20,

  /**
   * Get address of currently executing account
   *
   * @input <none>
   * @output `address`
   *
   * @see https://www.evm.codes/#30
   */
  ADDRESS = 0x30,

  /**
   * Get balance of the given account
   *
   * @input `address`
   * @output `balance`
   *
   * @see https://www.evm.codes/#31
   */
  BALANCE = 0x31,

  /**
   * Get execution origination address
   *
   * @input <none>
   * @output `address`
   *
   * @see https://www.evm.codes/#32
   */
  ORIGIN = 0x32,

  /**
   * Get caller address
   *
   * @input <none>
   * @output `address`
   *
   * @see https://www.evm.codes/#33
   */
  CALLER = 0x33,

  /**
   * Get deposited value by the instruction/transaction responsible for this execution
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#34
   */
  CALLVALUE = 0x34,

  /**
   * Get input data of current environment
   *
   * @input `i`
   * @output `data[i]`
   *
   * @see https://www.evm.codes/#35
   */
  CALLDATALOAD = 0x35,

  /**
   * Get size of input data in current environment
   *
   * @input <none>
   * @output `size`
   *
   * @see https://www.evm.codes/#36
   */
  CALLDATASIZE = 0x36,

  /**
   * Copy input data in current environment to memory
   *
   * @input `destOffset`, `offset`, `size`
   * @output <none>
   *
   * @see https://www.evm.codes/#37
   */
  CALLDATACOPY = 0x37,

  /**
   * Get size of code running in current environment
   *
   * @input <none>
   * @output `size`
   *
   * @see https://www.evm.codes/#38
   */
  CODESIZE = 0x38,

  /**
   * Copy code running in current environment to memory
   *
   * @input `destOffset`, `offset`, `size`
   * @output <none>
   *
   * @see https://www.evm.codes/#39
   */
  CODECOPY = 0x39,

  /**
   * Get price of gas in current environment
   *
   * @input <none>
   * @output `price`
   *
   * @see https://www.evm.codes/#3A
   */
  GASPRICE = 0x3A,

  /**
   * Get size of an account’s code
   *
   * @input `address`
   * @output `size`
   *
   * @see https://www.evm.codes/#3B
   */
  EXTCODESIZE = 0x3B,

  /**
   * Copy an account’s code to memory
   *
   * @input `address`, `destOffset`, `offset`, `size`
   * @output <none>
   *
   * @see https://www.evm.codes/#3C
   */
  EXTCODECOPY = 0x3C,

  /**
   * Get size of output data from the previous call from the current environment
   *
   * @input <none>
   * @output `size`
   *
   * @see https://www.evm.codes/#3D
   */
  RETURNDATASIZE = 0x3D,

  /**
   * Copy output data from the previous call to memory
   *
   * @input `destOffset`, `offset`, `size`
   * @output <none>
   *
   * @see https://www.evm.codes/#3E
   */
  RETURNDATACOPY = 0x3E,

  /**
   * Get hash of an account’s code
   *
   * @input `address`
   * @output `hash`
   *
   * @see https://www.evm.codes/#3F
   */
  EXTCODEHASH = 0x3F,

  /**
   * Get the hash of one of the 256 most recent complete blocks
   *
   * @input `blockNumber`
   * @output `hash`
   *
   * @see https://www.evm.codes/#40
   */
  BLOCKHASH = 0x40,

  /**
   * Get the block’s beneficiary address
   *
   * @input <none>
   * @output `address`
   *
   * @see https://www.evm.codes/#41
   */
  COINBASE = 0x41,

  /**
   * Get the block’s timestamp
   *
   * @input <none>
   * @output `timestamp`
   *
   * @see https://www.evm.codes/#42
   */
  TIMESTAMP = 0x42,

  /**
   * Get the block’s number
   *
   * @input <none>
   * @output `blockNumber`
   *
   * @see https://www.evm.codes/#43
   */
  NUMBER = 0x43,

  /**
   * Get the previous block’s RANDAO mix
   *
   * @input <none>
   * @output `prevRandao`
   *
   * @see https://www.evm.codes/#44
   */
  PREVRANDAO = 0x44,

  /**
   * Get the block’s gas limit
   *
   * @input <none>
   * @output `gasLimit`
   *
   * @see https://www.evm.codes/#45
   */
  GASLIMIT = 0x45,

  /**
   * Get the chain ID
   *
   * @input <none>
   * @output `chainId`
   *
   * @see https://www.evm.codes/#46
   */
  CHAINID = 0x46,

  /**
   * Get balance of currently executing account
   *
   * @input <none>
   * @output `balance`
   *
   * @see https://www.evm.codes/#47
   */
  SELFBALANCE = 0x47,

  /**
   * Get the base fee
   *
   * @input <none>
   * @output `baseFee`
   *
   * @see https://www.evm.codes/#48
   */
  BASEFEE = 0x48,

  /**
   * Get versioned hashes
   *
   * @input `index`
   * @output `blobVersionedHashesAtIndex`
   *
   * @see https://www.evm.codes/#49
   */
  BLOBHASH = 0x49,

  /**
   * Returns the value of the blob base-fee of the current block
   *
   * @input <none>
   * @output `blobBaseFee`
   *
   * @see https://www.evm.codes/#4A
   */
  BLOBBASEFEE = 0x4A,

  /**
   * Remove item from stack
   *
   * @input `y`
   * @output <none>
   *
   * @see https://www.evm.codes/#50
   */
  POP = 0x50,

  /**
   * Load word from memory
   *
   * @input `offset`
   * @output `value`
   *
   * @see https://www.evm.codes/#51
   */
  MLOAD = 0x51,

  /**
   * Save word to memory
   *
   * @input `offset`, `value`
   * @output <none>
   *
   * @see https://www.evm.codes/#52
   */
  MSTORE = 0x52,

  /**
   * Save byte to memory
   *
   * @input `offset`, `value`
   * @output <none>
   *
   * @see https://www.evm.codes/#53
   */
  MSTORE8 = 0x53,

  /**
   * Load word from storage
   *
   * @input `key`
   * @output `value`
   *
   * @see https://www.evm.codes/#54
   */
  SLOAD = 0x54,

  /**
   * Save word to storage
   *
   * @input `key`, `value`
   * @output <none>
   *
   * @see https://www.evm.codes/#55
   */
  SSTORE = 0x55,

  /**
   * Alter the program counter
   *
   * @input `counter`
   * @output <none>
   *
   * @see https://www.evm.codes/#56
   */
  JUMP = 0x56,

  /**
   * Conditionally alter the program counter
   *
   * @input `counter`, `b`
   * @output <none>
   *
   * @see https://www.evm.codes/#57
   */
  JUMPI = 0x57,

  /**
   * Get the value of the program counter prior to the increment corresponding to this instruction
   *
   * @input <none>
   * @output `counter`
   *
   * @see https://www.evm.codes/#58
   */
  PC = 0x58,

  /**
   * Get the size of active memory in bytes
   *
   * @input <none>
   * @output `size`
   *
   * @see https://www.evm.codes/#59
   */
  MSIZE = 0x59,

  /**
   * Get the amount of available gas, including the corresponding reduction for the cost of this instruction
   *
   * @input <none>
   * @output `gas`
   *
   * @see https://www.evm.codes/#5A
   */
  GAS = 0x5A,

  /**
   * Mark a valid destination for jumps
   *
   * @input <none>
   * @output <none>
   *
   * @see https://www.evm.codes/#5B
   */
  JUMPDEST = 0x5B,

  /**
   * Load word from transient storage
   *
   * @input `key`
   * @output `value`
   *
   * @see https://www.evm.codes/#5C
   */
  TLOAD = 0x5C,

  /**
   * Save word to transient storage
   *
   * @input `key`, `value`
   * @output <none>
   *
   * @see https://www.evm.codes/#5D
   */
  TSTORE = 0x5D,

  /**
   * Copy memory areas
   *
   * @input `destOffset`, `offset`, `size`
   * @output <none>
   *
   * @see https://www.evm.codes/#5E
   */
  MCOPY = 0x5E,

  /**
   * Place value 0 on stack
   *
   * @input <none>
   * @output `0`
   *
   * @see https://www.evm.codes/#5F
   */
  PUSH0 = 0x5F,

  /**
   * Place 1 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#60
   */
  PUSH1 = 0x60,

  /**
   * Place 2 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#61
   */
  PUSH2 = 0x61,

  /**
   * Place 3 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#62
   */
  PUSH3 = 0x62,

  /**
   * Place 4 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#63
   */
  PUSH4 = 0x63,

  /**
   * Place 5 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#64
   */
  PUSH5 = 0x64,

  /**
   * Place 6 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#65
   */
  PUSH6 = 0x65,

  /**
   * Place 7 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#66
   */
  PUSH7 = 0x66,

  /**
   * Place 8 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#67
   */
  PUSH8 = 0x67,

  /**
   * Place 9 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#68
   */
  PUSH9 = 0x68,

  /**
   * Place 10 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#69
   */
  PUSH10 = 0x69,

  /**
   * Place 11 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#6A
   */
  PUSH11 = 0x6A,

  /**
   * Place 12 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#6B
   */
  PUSH12 = 0x6B,

  /**
   * Place 13 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#6C
   */
  PUSH13 = 0x6C,

  /**
   * Place 14 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#6D
   */
  PUSH14 = 0x6D,

  /**
   * Place 15 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#6E
   */
  PUSH15 = 0x6E,

  /**
   * Place 16 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#6F
   */
  PUSH16 = 0x6F,

  /**
   * Place 17 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#70
   */
  PUSH17 = 0x70,

  /**
   * Place 18 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#71
   */
  PUSH18 = 0x71,

  /**
   * Place 19 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#72
   */
  PUSH19 = 0x72,

  /**
   * Place 20 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#73
   */
  PUSH20 = 0x73,

  /**
   * Place 21 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#74
   */
  PUSH21 = 0x74,

  /**
   * Place 22 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#75
   */
  PUSH22 = 0x75,

  /**
   * Place 23 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#76
   */
  PUSH23 = 0x76,

  /**
   * Place 24 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#77
   */
  PUSH24 = 0x77,

  /**
   * Place 25 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#78
   */
  PUSH25 = 0x78,

  /**
   * Place 26 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#79
   */
  PUSH26 = 0x79,

  /**
   * Place 27 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#7A
   */
  PUSH27 = 0x7A,

  /**
   * Place 28 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#7B
   */
  PUSH28 = 0x7B,

  /**
   * Place 29 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#7C
   */
  PUSH29 = 0x7C,

  /**
   * Place 30 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#7D
   */
  PUSH30 = 0x7D,

  /**
   * Place 31 byte item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#7E
   */
  PUSH31 = 0x7E,

  /**
   * Place 32 byte (full word) item on stack
   *
   * @input <none>
   * @output `value`
   *
   * @see https://www.evm.codes/#7F
   */
  PUSH32 = 0x7F,

  /**
   * Duplicate 1st stack item
   *
   * @input `value`
   * @output `value`, `value`
   *
   * @see https://www.evm.codes/#80
   */
  DUP1 = 0x80,

  /**
   * Duplicate 2nd stack item
   *
   * @input `a`, `b`
   * @output `b`, `a`, `b`
   *
   * @see https://www.evm.codes/#81
   */
  DUP2 = 0x81,

  /**
   * Duplicate 3rd stack item
   *
   * @input `a`, `b`, `c`
   * @output `c`, `a`, `b`, `c`
   *
   * @see https://www.evm.codes/#82
   */
  DUP3 = 0x82,

  /**
   * Duplicate 4th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#83
   */
  DUP4 = 0x83,

  /**
   * Duplicate 5th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#84
   */
  DUP5 = 0x84,

  /**
   * Duplicate 6th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#85
   */
  DUP6 = 0x85,

  /**
   * Duplicate 7th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#86
   */
  DUP7 = 0x86,

  /**
   * Duplicate 8th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#87
   */
  DUP8 = 0x87,

  /**
   * Duplicate 9th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#88
   */
  DUP9 = 0x88,

  /**
   * Duplicate 10th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#89
   */
  DUP10 = 0x89,

  /**
   * Duplicate 11th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#8A
   */
  DUP11 = 0x8A,

  /**
   * Duplicate 12th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#8B
   */
  DUP12 = 0x8B,

  /**
   * Duplicate 13th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#8C
   */
  DUP13 = 0x8C,

  /**
   * Duplicate 14th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#8D
   */
  DUP14 = 0x8D,

  /**
   * Duplicate 15th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#8E
   */
  DUP15 = 0x8E,

  /**
   * Duplicate 16th stack item
   *
   * @input `...`, `value`
   * @output `value`, `...`, `value`
   *
   * @see https://www.evm.codes/#8F
   */
  DUP16 = 0x8F,

  /**
   * Exchange 1st and 2nd stack items
   *
   * @input `a`, `b`
   * @output `b`, `a`
   *
   * @see https://www.evm.codes/#90
   */
  SWAP1 = 0x90,

  /**
   * Exchange 1st and 3rd stack items
   *
   * @input `a`, `b`, `c`
   * @output `c`, `b`, `a`
   *
   * @see https://www.evm.codes/#91
   */
  SWAP2 = 0x91,

  /**
   * Exchange 1st and 4th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#92
   */
  SWAP3 = 0x92,

  /**
   * Exchange 1st and 5th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#93
   */
  SWAP4 = 0x93,

  /**
   * Exchange 1st and 6th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#94
   */
  SWAP5 = 0x94,

  /**
   * Exchange 1st and 7th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#95
   */
  SWAP6 = 0x95,

  /**
   * Exchange 1st and 8th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#96
   */
  SWAP7 = 0x96,

  /**
   * Exchange 1st and 9th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#97
   */
  SWAP8 = 0x97,

  /**
   * Exchange 1st and 10th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#98
   */
  SWAP9 = 0x98,

  /**
   * Exchange 1st and 11th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#99
   */
  SWAP10 = 0x99,

  /**
   * Exchange 1st and 12th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#9A
   */
  SWAP11 = 0x9A,

  /**
   * Exchange 1st and 13th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#9B
   */
  SWAP12 = 0x9B,

  /**
   * Exchange 1st and 14th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#9C
   */
  SWAP13 = 0x9C,

  /**
   * Exchange 1st and 15th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#9D
   */
  SWAP14 = 0x9D,

  /**
   * Exchange 1st and 16th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#9E
   */
  SWAP15 = 0x9E,

  /**
   * Exchange 1st and 17th stack items
   *
   * @input `a`, `...`, `b`
   * @output `b`, `...`, `a`
   *
   * @see https://www.evm.codes/#9F
   */
  SWAP16 = 0x9F,

  /**
   * Append log record with no topics
   *
   * @input `offset`, `size`
   * @output <none>
   *
   * @see https://www.evm.codes/#A0
   */
  LOG0 = 0xA0,

  /**
   * Append log record with one topic
   *
   * @input `offset`, `size`, `topic`
   * @output <none>
   *
   * @see https://www.evm.codes/#A1
   */
  LOG1 = 0xA1,

  /**
   * Append log record with two topics
   *
   * @input `offset`, `size`, `topic1`, `topic2`
   * @output <none>
   *
   * @see https://www.evm.codes/#A2
   */
  LOG2 = 0xA2,

  /**
   * Append log record with three topics
   *
   * @input `offset`, `size`, `topic1`, `topic2`, `topic3`
   * @output <none>
   *
   * @see https://www.evm.codes/#A3
   */
  LOG3 = 0xA3,

  /**
   * Append log record with four topics
   *
   * @input `offset`, `size`, `topic1`, `topic2`, `topic3`, `topic4`
   * @output <none>
   *
   * @see https://www.evm.codes/#A4
   */
  LOG4 = 0xA4,

  /**
   * Create a new account with associated code
   *
   * @input `value`, `offset`, `size`
   * @output `address`
   *
   * @see https://www.evm.codes/#F0
   */
  CREATE = 0xF0,

  /**
   * Message-call into an account
   *
   * @input `gas`, `address`, `value`, `argsOffset`, `argsSize`, `retOffset`, `retSize`
   * @output `success`
   *
   * @see https://www.evm.codes/#F1
   */
  CALL = 0xF1,

  /**
   * Message-call into this account with alternative account’s code
   *
   * @input `gas`, `address`, `value`, `argsOffset`, `argsSize`, `retOffset`, `retSize`
   * @output `success`
   *
   * @see https://www.evm.codes/#F2
   */
  CALLCODE = 0xF2,

  /**
   * Halt execution returning output data
   *
   * @input `offset`, `size`
   * @output <none>
   *
   * @see https://www.evm.codes/#F3
   */
  RETURN = 0xF3,

  /**
   * Message-call into this account with an alternative account’s code, but persisting the current values for sender and value
   *
   * @input `gas`, `address`, `argsOffset`, `argsSize`, `retOffset`, `retSize`
   * @output `success`
   *
   * @see https://www.evm.codes/#F4
   */
  DELEGATECALL = 0xF4,

  /**
   * Create a new account with associated code at a predictable address
   *
   * @input `value`, `offset`, `size`, `salt`
   * @output `address`
   *
   * @see https://www.evm.codes/#F5
   */
  CREATE2 = 0xF5,

  /**
   * Static message-call into an account
   *
   * @input `gas`, `address`, `argsOffset`, `argsSize`, `retOffset`, `retSize`
   * @output `success`
   *
   * @see https://www.evm.codes/#FA
   */
  STATICCALL = 0xFA,

  /**
   * Halt execution reverting state changes but returning data and remaining gas
   *
   * @input `offset`, `size`
   * @output <none>
   *
   * @see https://www.evm.codes/#FD
   */
  REVERT = 0xFD,

  /**
   * Designated invalid instruction
   *
   * @input <none>
   * @output <none>
   *
   * @see https://www.evm.codes/#FE
   */
  INVALID = 0xFE,

  /**
   * Halt execution and register account for later deletion or send all Ether to address (post-Cancun)
   *
   * @input `address`
   * @output <none>
   *
   * @see https://www.evm.codes/#FF
   */
  SELFDESTRUCT = 0xFF,
}
