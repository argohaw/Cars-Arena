<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <body style="background-image: url('background.jpg');">
        <h2 style="margin-top: 10px; color:black; text-align: center;">Hatchback Car Details</h2>
        <table style="width:50%; border:3px solid black; color: black; margin-left: auto; margin-right: auto; padding: 5px;">
            <tr bgcolor="#fff" style="width:50%; border:3px solid black; color: black; margin-left: auto; margin-right: auto; padding: 5px;">
                <th>Name</th>
                <th>Price</th>
                <th>Max Power</th>
                <th>Transmission</th>
                <th>Body Type</th>
                <th>Fuel Type</th>
            </tr>
            <xsl:for-each select="car/model">
                <tr bgcolor="lightgreen" style="width:50%; border:3px solid black; color: black; margin-left: auto; margin-right: auto; padding: 5px;">
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="price"/></td>
                    <td><xsl:value-of select="maxpower"/></td>
                    <td><xsl:value-of select="transmission"/></td>
                    <td><xsl:value-of select="bodytype"/></td>
                    <td><xsl:value-of select="fueltype"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>