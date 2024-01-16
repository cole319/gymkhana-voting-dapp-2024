//SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.0;

// For counting using safeMath module
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract Create {
    using Counters for Counters.Counter;

    Counters.Counter public _voterId;
    Counters.Counter public _candidateId;

    address public admin;

    // Defining Candidate dataType
    struct Candidate {
        uint256 candidateId;
        string age;
        string name;
        string image;
        uint256 voteCount;
        address _address;
        string ipfs;
    }

    event CreateCandidate (
        uint256 indexed candidateId,
        string age,
        string name,
        string image,
        uint256 voteCount,
        address _address,
        string ipfs
    );

    address[] public candidateAddress;

    mapping(address => Candidate) public candidates;

    address[] public votedVoters;
    address[] public votersAddress;

    mapping(address => Voter) public voters;

    // Define Voter dataType
    struct Voter {
        uint256 voterId;
        string voterName;
        string voterImage;
        address voterAddress;
        uint256 voterAllowed;
        bool voterVoted;
        uint256 voterVote;
        string voterIpfs;
    }

    event CreateVoter (
        uint256 indexed voterId,
        string voterName,
        string voterImage,
        address voteAddress,
        uint256 voterAllowed,
        bool voterVoted,
        uint256 voterVote,
        string voterIpfs
    );

    constructor() {
        admin = msg.sender;
    }

    function setCandidate(
        address _address, 
        string memory _age, 
        string memory _name, 
        string memory _image, 
        string memory _ipfs
        ) public {
        require(admin == msg.sender, "Only admin can authorize candidate");

        _candidateId.increment();

        uint256 idNumber = _candidateId.current();

        Candidate storage candidate = candidates[_address];

        candidate.age = _age;
        candidate.name = _name;
        candidate.candidateId = idNumber;
        candidate.image = _image;
        candidate.voteCount = 0;
        candidate._address = _address;
        candidate.ipfs = _ipfs;
    }

    function getCandidate() public view returns (address[] memory){
        return candidateAddress;
    }

    function getCandidateLength() public view returns (uint256){
        return candidateAddress.length;
    }

    function getCandidateData(address _address) public view returns (
        string memory, 
        string memory, 
        uint256, 
        string memory, 
        uint256, 
        string memory, 
        address
        ) {
        return (
            candidates[_address].age,
            candidates[_address].name,
            candidates[_address].candidateId,
            candidates[_address].image,
            candidates[_address].voteCount,
            candidates[_address].ipfs,
            candidates[_address]._address,
        );
    } 

    function voterRights(
        address _address, 
        string memory _name, 
        string memory _image, 
        string memory _ipfs
        ) public {
        require(admin == msg.sender, "Only admin can authorize voter");

        _voterId.increment();

        uint256 idNumber = _voterId.current();

        Voter storage voter = voters[_address];

        require(voter.voterAllowed == 0);

        voter.voterAllowed = 1;
        voter.voterName = _name;
        voter.voterImage = _image;
        voter.voterAddress = _address;
        voter.voterId = idNumber;
        voter.voterVote = 1000;
        voter.voterVoted = false;
        voter.voterIpfs = _ipfs;

        votersAddress.push(_address);

        emit CreateVoter(
            idNumber,
            _name,
            _image,
            _address,
            voter.voterAllowed,
            voter.voterVoted,
            voter.voterVote,
            _ipfs
        );
    }

    function vote(address _candidateAddress, uint256 _candidateVoteId) external {
        Voter storage voter = voters[msg.sender];

        require(voter.voterVoted == false, "You have already voted");
        require(voter.voterAllowed != 0, "You have no voter rights");

        voter.voterVoted = true;
        voter.voterVote = _candidateVoteId;

        votedVoters.push(msg.sender);

        candidates[_candidateAddress].voteCount += voter.voterAllowed;
    }

    function getVoterLength() public view returns (uint256) {
        return votersAddress.length;
    }

    function getVoterData(address _address) public view returns(
        uint256, 
        string memory, 
        string memory, 
        address, 
        string memory, 
        uint256, 
        bool
        ) {
        return(
            voters[_address].voterId,
            voters[_address].voterName,
            voters[_address].voterImage,
            voters[_address].voterAddress,
            voters[_address].voterIpfs,
            voters[_address].voterAllowed,
            voters[_address].voterVoted,
        );
    }

    function getVotedVoterList() public view returns (address[] memory){
        return votedVoters;
    }

    function getVoterList() public view returns(address[] memory){
        return votersAddress;
    }
}