<?php
$conn = new COM("ADODB.Connection");
$conn->Open('Provider=VFPOLEDB.1;Data Source="D:\ProRpsTest\PRODATA.DBC";');
// SQL statement to build recordset.
$rs = $conn->Execute("SELECT * FROM icitem01 WHERE LEFT(ALLTRIM(item), 2)='PA' ");
echo "<p>List of PA items:</p><hr>";
// Display all the values in the records set
while (!$rs->EOF) {
    $fv = $rs->Fields("item");
    echo $fv->value."<br>\n";
    $rs->MoveNext();
}
$rs->Close();
?>
